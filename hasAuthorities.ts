const data: { allAuthorities: Array<string> } = {
  allAuthorities: []
};

export function setAllAuthorities(allAuthorities: Array<string>) {
  data.allAuthorities = allAuthorities;
}

/**
 * 是否有权限信息
 * @param authorities 当前权限
 */
export function hasAuthorities(authorities: Array<string> | string | undefined) {
  if (!authorities)
    return false;
  if (Array.isArray(authorities)) {
    return authorities.some(item => data.allAuthorities.includes(item));
  }
  return data.allAuthorities.includes(authorities);
}
