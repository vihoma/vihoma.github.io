use strict;
use Irssi;
use Irssi::Irc;
use LWP::UserAgent;
use vars qw($VERSION %IRSSI);

$VERSION = '1.10';
%IRSSI = (
    authors     => 'Mikko Pikarinen, Marko Vihoma (just added https)',
    contact     => '/dev/null',
    name        => 'Youtube Title',
    description => 'This script tries to fetch titles for Youtube-urls said on channels',
    license     => 'EVVKTVH http://evvk.com/evvktvh.html',
);

####################################################################
Irssi::print("Loading Youtube Title ".$VERSION);

sub event_youtubeurl {
  my ($srv, $data, $nick, $addr) = @_;
  my ($dest, $text) = split(/ :/, $data, 2);

  if ($text =~ /youtube\.com\/watch\?/) {
    my $url = "";
    foreach my $word (split(/\s+/,$text)) {
      if ($word =~ /(www\.|)youtube\.com\/watch/) {
        $url = $word;
      }
    }
    if ($url) {
      if ($url !~ /^https?:\/\//) { $url = "http://".$url }
      my $ua = LWP::UserAgent->new(keep_alive => 0,
                                   timeout    => 5,
                                   agent => 'Irssi/LWP',
                                   max_size => 16000
                                  );

      my $req = HTTP::Request->new(GET => $url);
      my $res = $ua->request($req);
      if ($res->is_success) {
        my $html = $res->content;

        $html =~ s/.*<title>//si;
        $html =~ s/<\/title>.*//si;
        $html =~ s/\s/ /gs;
	$html =~ s/&quot;/"/g;
	$html =~ s/&ouml;/ö/g;
	$html =~ s/&auml;/ä/g;
	$html =~ s/&Ouml;/Ö/g;
	$html =~ s/&Auml;/Ä/g;
	$html =~ s/&amp;/&/g;
	$html =~ s/&#228;/ä/g;
	$html =~ s/&#246;/ö/g;

        if ($dest eq $srv->{nick}) {
          $srv->print($dest,"*** " . $html, MSGLEVEL_CLIENTCRAP);
        } else {
          $srv->print($dest,"*** " . $html, MSGLEVEL_CLIENTCRAP);
        }
      }
      undef $res;
      undef $req;
    }
  }
}

Irssi::signal_add_last("event privmsg", "event_youtubeurl");
