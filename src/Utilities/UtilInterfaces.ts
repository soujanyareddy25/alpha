export interface LinkObj{
    to:string;name:string;
}
export interface LinkArray extends Array<LinkObj>{}

export interface BreadCrumbsProps{
    linkArray: LinkArray;
}