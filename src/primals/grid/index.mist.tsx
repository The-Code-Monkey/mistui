// Generated by MistCSS, do not modify
import './index.mist.css'

import type { JSX, ReactNode } from 'react'

type CellProps = {
  children?: ReactNode
  columns?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  rows?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
} & JSX.IntrinsicElements['div']

export function Cell({ children, columns, rows, ...props }: CellProps) {
  return (
    <div {...props} className="cell" data-columns={columns} data-rows={rows}>
      {children}
    </div>
  )
}

type GridProps = {
  children?: ReactNode
  columns?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  rows?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
} & JSX.IntrinsicElements['div']

export function Grid({ children, columns, rows, ...props }: GridProps) {
  return (
    <div {...props} className="grid" data-columns={columns} data-rows={rows}>
      {children}
    </div>
  )
}