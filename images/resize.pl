#!/usr/local/bin/perl
use Image::Magick;

my($image, $x);

$image = Image::Magick->new;
$x = $image->Read("@ARGV[0]");
warn "$x" if "$x";

if (! @ARGV[1])
{
	$size = '160x120';
}
else
{
	$size = @ARGV[1];
}

$x = $image->Resize(geometry=>$size);
warn "$x" if "$x";
@ARGV[0] =~ s/\.([\w^_])/_$size.$1/;
$x = $image->Write("@ARGV[0]");
warn "$x" if "$x";
1;

