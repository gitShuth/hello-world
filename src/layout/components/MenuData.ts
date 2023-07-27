export interface MenuData {
  routePath: string // 路由地址
  routeName: string // 路由名字
  subMenu: boolean //是否为可折叠菜单
  routeTitle: string // 菜单/折叠项名字
  routeIcon?: boolean // 菜单/折叠项是否带图标
  IconName?: string // 图标名称
  children: Array<MenuData>
}
