import React from 'react'

export interface IRouteProps {
  pathName: string
  urlPath: string
  Component: React.ReactElement
  hasChildren: boolean
  nestedComponents?: IRouteProps[]
}

export type IRouteFunction = (props: IRouteProps) => JSX.Element

export type IRouterFunction = (
  routes: IRouteProps[],
  browserRouter: boolean,
  enableTopScroll?: boolean,
  layout?: React.ReactElement | React.FC | React.ComponentClass,
) => any