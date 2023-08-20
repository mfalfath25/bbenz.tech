import React from 'react'

import { FaFigma, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandSolidjs } from 'react-icons/tb'
import {
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiStyledcomponents,
  SiSvelte,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from 'react-icons/si'
import { GrGrommet } from 'react-icons/gr'
import { HelpCircle } from 'lucide-react'

interface ProjectStackProps {
  stack: string
}

export const ProjectStack = ({ stack }: ProjectStackProps) => {
  const size = 20

  switch (stack) {
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
    case 'TypeScript':
      return <SiTypescript size={size} />
    case 'JavaScript':
      return <SiJavascript size={size} />
    case 'Three':
      return <SiThreedotjs size={size} />
    case 'Framer':
      return <SiFramer size={size} />
    case 'Tailwind':
      return <SiTailwindcss size={size} />
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
