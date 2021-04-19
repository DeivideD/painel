


export class NavigationEnd {
  constructor(
      /** @docsNotRequired */
      public id: number,
      /** @docsNotRequired */
      public url: string,
      /** @docsNotRequired */
      public urlAfterRedirects: string) {}

  /** @docsNotRequired */
  toString(): string {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
}

export class NavigationCancel {
  constructor(
      /** @docsNotRequired */
      public id: number,
      /** @docsNotRequired */
      public url: string,
      /** @docsNotRequired */
      public reason: string) {}

  /** @docsNotRequired */
  toString(): string { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
}

export class NavigationError {
  constructor(
      /** @docsNotRequired */
      public id: number,
      /** @docsNotRequired */
      public url: string,
      /** @docsNotRequired */
      public error: any) {}

  /** @docsNotRequired */
  toString(): string {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
}

export class NavigationStart {
  constructor(
      /** @docsNotRequired */
      public id: number,
      /** @docsNotRequired */
      public url: string) {}

  /** @docsNotRequired */
  toString(): string { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}