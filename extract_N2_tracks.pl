#!/usr/bin/perl
use strict;
use warnings;
use JSON;

my $FILEIN = $ARGV[0];

my $JSONIN;
{
  local $/ = undef;
  open my $fh, "<", $FILEIN or die "couldn't open $FILEIN";
  $JSONIN = <$fh>; 
}

my $perl_scalar = decode_json $JSONIN;

my $tracks;
for my $track (@{$$perl_scalar{tracks}}) {
    next if $$track{type} eq "SyntenyTrack";
    if (@{$$track{assemblyNames}}[0] eq 'c_elegans_PRJNA13758') {
        @{$$track{assemblyNames}}[0]='Caenorhabditis_elegans';

        if ( $$track{formatDetails}{feature} ) {
            $$track{formatDetails}{feature} =~ s/\/tools/https:\/\/wormbase.org\/tools/;
            $$track{formatDetails}{feature} =~ s/\/get\?name/https:\/\/wormbase.org\/get?name/;
        }

        push @{$tracks}, $track;
        
    }
}

print to_json($tracks, {pretty=>1});
