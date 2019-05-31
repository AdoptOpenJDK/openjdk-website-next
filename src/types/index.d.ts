declare module "*.png" {
  const content: any
  export default content
}

declare module "*.svg" {
  const content: any
  export default content
}

export interface Platform {
  name?: string,
  logo?: string,
  official_name?: string
  release_name?: string
  release_link?: string
  release_datetime?: string
  binaries: object[]
}

