const data: { allAuthorities: Array<string>, administrator: boolean } = {
  administrator: false,
  allAuthorities: []
};

export function setAllAuthorities(allAuthorities: Array<string>) {
  data.allAuthorities = allAuthorities;
}

export function setAdministrator(administrator) {
  data.administrator = administrator;
}

/**
 * 是否有权限信息
 * @param authorities 当前权限
 */
export function hasAuthorities(authorities: Array<string> | string | undefined | boolean) {
  if (data.administrator) {
    return true;
  }
  if (typeof authorities === 'boolean') {
    return authorities;
  }
  if (!authorities)
    return false;
  if (Array.isArray(authorities)) {
    return authorities.some(item => data.allAuthorities.includes(item));
  }
  return data.allAuthorities.includes(authorities);
}
