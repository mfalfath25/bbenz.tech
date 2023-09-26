import React from 'react'

import { FaFigma, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa'
import {
  TbBrandNextjs,
  TbBrandSolidjs,
  TbBrandTypescript,
  TbSquareLetterZ,
} from 'react-icons/tb'
import {
  SiAstro,
  SiDaisyui,
  SiFramer,
  SiGraphql,
  SiJavascript,
  SiMdx,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiSvelte,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from 'react-icons/si'
import { GrGrommet } from 'react-icons/gr'
import { HelpCircle } from 'lucide-react'
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'

type ProjectStackProps = {
  stack: string
}

export const ProjectStack = ({ stack }: ProjectStackProps) => {
  const size = 20

  switch (stack) {
    case 'Astro':
      return <SiAstro size={size} />
    case 'Solid':
      return <TbBrandSolidjs size={size} />
    case 'Svelte':
      return <SiSvelte size={size} />
    case 'Vue':
      return <FaVuejs size={size} />
    case 'React':
      return <FaReact size={size} />
    case 'Next':
      return <TbBrandNextjs size={size} />
    case 'NodeJS':
      return <FaNodeJs size={size} />
    case 'MongoDB':
      return <SiMongodb size={size} />
    case 'MySQL':
      return <SiMysql size={size} />
    case 'PostgreSQL':
      return <SiPostgresql size={size} />
    case 'GraphQL':
      return <SiGraphql size={size} />
    case 'TypeScript':
      return <BiLogoTypescript size={size} />
    case 'JavaScript':
      return <BiLogoJavascript size={size} />
    case 'MDX':
      return <SiMdx size={size} />
    case 'React Query':
      return <SiReactquery size={size} />
    case 'Zustand':
      return <TbSquareLetterZ size={size} />
    case 'Redux':
      return <SiRedux size={size} />
    case 'Three':
      return <SiThreedotjs size={size} />
    case 'Framer':
      return <SiFramer size={size} />
    case 'Tailwind':
      return <SiTailwindcss size={size} />
    case 'Daisy UI':
      return <SiDaisyui size={size} />
    case 'Grommet UI':
      return <GrGrommet size={size} />
    case 'Styled Components':
      return <SiStyledcomponents size={size} />
    case 'Figma':
      return <FaFigma size={size} />
    default:
      return <HelpCircle size={size} />
  }
}
