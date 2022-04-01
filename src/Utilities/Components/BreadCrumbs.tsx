import React from 'react';
import {  Breadcrumb } from 'react-bootstrap';
import { BreadCrumbsProps, LinkArray, LinkObj } from '../UtilInterfaces';
function BreadCrumbs(props:BreadCrumbsProps) {
  return (
    <>
        {props.linkArray.map((link:LinkObj) =>{
            return (<Breadcrumb className="BreadCrumbStyle">
            <Breadcrumb.Item linkProps={{ to: link.to }}>{link.name}</Breadcrumb.Item>
          </Breadcrumb>)
        })}
    </>
  );
}
export default BreadCrumbs;
