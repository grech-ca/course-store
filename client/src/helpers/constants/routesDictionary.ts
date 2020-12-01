export const routesDictionary = {
  'admin/product': 'Товары',
  'admin/order': 'Заказы',
  'admin/': 'Главная',
};

export const getRouteLabel = (route: string): string | undefined => {
  return Object.entries(routesDictionary).find(([path]: [string, string]) =>
    new RegExp(`${path}((/w+)+|/?)$`).test(route),
  )?.[1];
};
