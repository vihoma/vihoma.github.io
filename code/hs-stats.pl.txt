#!/usr/bin/env perl

use strict;
use warnings;
use JSON;

our $NAME = "hs-stats";
our $VERSION = "0.2";

##
# Configuration

# Log directory
my $logdir = "$ENV{'HOME'}/logs/hs-stats";
# Valid classes
my @valid_classes = (
  "Warlock",
  "Paladin",
  "Mage",
  "Shaman",
  "Rogue",
  "Druid",
  "Hunter",
  "Priest",
  "Warrior"
);
# END configuration

main();

sub main {
  my $func = undef;
  $func = $ARGV[0] if (defined $ARGV[0]);
  my $class = undef;
  $class = $ARGV[1] if (defined $ARGV[1]);
  my $string = undef;
  my $file = undef;
  my $ret = 0;

  if ($class) {
    $file = select_file($func, $class);
    if ($file ne "undefined") {
      open(my $fh, "<", $file) or die "Can't open HearthStone stats
      JSON-file: $file Error: \"$!\"\n";
      
      while (<$fh>) {
		  $string .= $_;
      }
      
      close($fh);
    }
  } else { usage() and return 0; }
  
  $ret = finalize($string, $func, $class, $file);
  if ($ret == 0) { usage() && return 0; } else { return $ret; }
}

sub finalize {
  my $string = shift;
  my $func = shift;
  my $class = shift;
  my $file = shift;

  if ($string) {
    if (is_class($class) && $func =~ /^casual$/i) {
      print "Play Mode Casual:\n";
      parse_generic($string, $class);
      return 1;
    } elsif (is_class($class) && $func =~ /^ranked$/i) {
      print "Play Mode Ranked:\n";
      parse_generic($string, $class);
      return 1;
    } elsif (is_class($class) && $class !~ /^friends$/i) {
      print "Stats for $func Solo Mode:\n";
      parse_generic($string, $class);
      return 1;
    } elsif ($class = "friends") {
      print "Stats for Battles Against Friends:\n";
      parse_friends();
      return 1;
    } else {
      print "$class is not a HearthStone Hero class or 'friends'!\n";
      return 0;
    }
  } else {
    print "File $file is empty!\n";
    return 0;
  }
}

sub select_file {
  my $func = shift;
  my $class = shift;
  my $input = "undefined";

  if ($class) {
    if ($func eq "friends") {
      $input = "${logdir}/friends.json";
    } elsif (is_class($class) && $func =~ /^normal$/i) {
      $input = "${logdir}/practice_normal.json";
    } elsif (is_class($class) && $func =~ /^expert$/i) {
      $input = "${logdir}/practice_expert.json";
    } elsif (is_class($class) && $func =~ /^casual$/i) {
      $input = "${logdir}/casual.json";
    } elsif (is_class($class) && $func =~ /^ranked$/i) {
      $input = "${logdir}/ranked.json";
    }
  }
  
  return $input;
}

sub is_class {
  my $input = shift;

  if ($input) {
    for (@valid_classes) { /^${input}$/i ? return 1 : return 0; }
  }

  return 0;
}

sub parse_generic {
  my $string = shift;
  my $class = shift;
  my $parsed = undef;
  if ($string) { $parsed = decode_json($string) } else { return 0; }
  my @players = $parsed->{'wins'}->{"$class"};
  
  for (my $i = 0; $i < 9; $i++) {
    print "$players[0][$i]\n" if($players[0][$i]);
  }

  return 1;
}

sub parse_friends {
  my $string = shift;
  my $parsed = undef;
  if ($string) { $parsed = decode_json($string) } else { return 0; }
  my $wins = $parsed->{'wins'};
  
  foreach my $res (%{$wins}) {
    if ($res =~ /^\d$/) {
      print "$res\n";
    } else {
      print "$res : ";
    }
  }

  return 1;
}

sub usage {
  print "Usage:\n$0 <mode> <class>\nor:\n$0 <mode>\n";
  print "<mode> can be one of HearthStone game modes or 'friends'\nand\n";
  print "<class> is one of HeathStone Hero classes or let undefined.\n";
  return 1;
}
