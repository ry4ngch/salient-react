import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Drawer = ({showDrawer=false, title, onCloseDrawer, position="left", hasBackdrop=true, className, children, ...rest}) => {
    const drawerClasses = classNames('drawer', {
            'drawer-active': showDrawer,
            'drawer-backdrop': showDrawer && hasBackdrop 
        },  className);

  return (
    <React.Fragment>
        { showDrawer && 
        <div {...rest} className={drawerClasses}>
            <div className={`drawer-content drawer-${position}`}>
                <div className="drawer-header">
                    {title && <h3>
                        { title }
                    </h3>}
                    <a className='drawer-close' onClick={onCloseDrawer}></a>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
        }
    </React.Fragment>
  );
}

export default Drawer;