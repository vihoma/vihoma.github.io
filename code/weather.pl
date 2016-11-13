#!/usr/bin/env perl

use strict;
use warnings;
no warnings;
use 5.20.0;
use Carp;
use LWP::Simple;
use JSON;

our $VERSION = "1.1";

my %chr_to_sym = (
    East    =>  "\N{U+2190}",
    E       =>  "\N{U+2190}",
    South   =>  "\N{U+2191}",
    S       =>  "\N{U+2191}",
    West    =>  "\N{U+2192}",
    W       =>  "\N{U+2192}",
    North   =>  "\N{U+2193}",
    N       =>  "\N{U+2193}",
    SE      =>  "\N{U+2196}",
    SSE     =>  "\N{U+2196}",
    ESE     =>  "\N{U+2196}",
    SW      =>  "\N{U+2197}",
    SSW     =>  "\N{U+2197}",
    WSW     =>  "\N{U+2197}",
    NW      =>  "\N{U+2198}",
    NNW     =>  "\N{U+2198}",
    NWN     =>  "\N{U+2198}",
    NE      =>  "\N{U+2199}",
    NNE     =>  "\N{U+2199}",
    NEN     =>  "\N{U+2199}",
);

my $wind_sym = "?";
my @cmdargs = @ARGV;

if (not defined $cmdargs[0]) { help(); exit 0; }
if ($cmdargs[0] =~ /^help$/isxm) { help(); exit 1; }

my $param;

for my $arg (@cmdargs) { $param .= "$arg "; }
$param =~ s/ /%20/smg;
$param =~ s/%20$//sm;

my $content = get("http://api.wunderground.com/api/2ba36a7898646211/conditions/q/${param}.json");
die "Error getting data!" if (! $content);

my $parsed_json = decode_json($content);
my $country =
  $parsed_json->{'current_observation'}->{'observation_location'}->{'country'};
my $city =
  $parsed_json->{'current_observation'}->{'observation_location'}->{'city'};
my $temp = $parsed_json->{'current_observation'}->{'temp_c'};
my $wind_str = $parsed_json->{'current_observation'}->{'wind_string'};
my $wind_kph = $parsed_json->{'current_observation'}->{'wind_kph'};
my $wind_dir = $parsed_json->{'current_observation'}->{'wind_dir'};
my $sky = $parsed_json->{'current_observation'}->{'weather'};
my $windchill = $parsed_json->{'current_observation'}->{'windchill_c'};

if (! $city) {
  print "City not found...\n";
  help();
  exit 0;
}

for my $key (keys %chr_to_sym) {
  if ($wind_dir eq $key) { $wind_sym = $chr_to_sym{$key}; }
}

weather();

sub weather {
  print "Location:\t${city}, ${country}\n";
  print "Temperature:\t${temp}°C\n";
  print "Wind:\t\t${wind_kph}km/h, from $wind_dir (${wind_sym})\n";
  print "Windchill:\t${windchill}°C\n";
  print "Sky:\t\t${sky}\n";

  return 1;
}

sub help {
  print "Usage: $0 <city> <state>|<country>\n";
  print "Please check the city and country or state is spelled correctly!\n";

  return 1;
}

1;
