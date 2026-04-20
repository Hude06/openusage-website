import { cn } from '@/lib/utils'

interface AsciiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const SIZE_MAP = {
  sm: 'text-[4px] leading-[4px]',
  md: 'text-[6px] leading-[6px]',
  lg: 'text-[8px] leading-[8px]',
  xl: 'text-[11px] leading-[11px]',
}

const ART = `    .%%&EG:           .HNNW
   %%%&A%BCt          /FFFV
   FFFF     %FFF      /9694
   FFFF     %%C4      a956/
   FFFF     %FG9     +%&y'
   F%FF     F%89     ?%%a
    %%%%GF6%9    ?%d
     *%&%&F*    :n&%?
             JI%I/
            /258/    .%G%Ffe
           .CFFF   FFFFFIFF%
          /0%FF    %FF9   FFFF
         v%FF/     FFF9   FFFF
         ]%%%      %%FF   FF%F
         FG%%      5%%&   0&FF
         %F&F      %%6%&|FFF
         .FFFF    'G&%|**
                           FFFFFFFFFFFFFFFFFF
                           %%%%%%%%%%%%%%%%%%`

export function AsciiLogo({ size = 'md', className }: AsciiLogoProps) {
  return (
    <pre
      aria-label="Open Usage"
      className={cn(
        'font-mono whitespace-pre select-none tracking-tight text-foreground',
        SIZE_MAP[size],
        className,
      )}
    >
      {ART}
    </pre>
  )
}
