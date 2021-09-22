/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotone/Design/PenAndRuller.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotone/Interface/Settings-02.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>

      <AsideMenuItemWithSub to='/factors' title='فاکتور ها' fontIcon='bi-archive' icon='/media/icons/duotone/Code/Compiling.svg'>
          <AsideMenuItem to='/factors/overview' title='پیش نمایش' hasBullet={true}/>
          <AsideMenuItem to='/factors/add' title='اضافه کردن' hasBullet={true}/>

      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub to='/customers' title='مشتری ها' fontIcon='bi-archive' icon='/media/icons/duotone/Code/Compiling.svg'>
          <AsideMenuItem to='/customers/overview' title='پیش نمایش' hasBullet={true}/>
          <AsideMenuItem to='/customers/add' title='اضافه کردن' hasBullet={true}/>
      </AsideMenuItemWithSub>
      {/* ========================================================== PRODUCTS */}
      <AsideMenuItemWithSub to='/products' title='محصولات' fontIcon='bi-archive' icon='/media/icons/duotone/Code/Compiling.svg'>
          <AsideMenuItem to='/products/overview' title='پیش نمایش' hasBullet={true}/>
          <AsideMenuItem to='/products/add' title='اضافه کردن' hasBullet={true}/>
      </AsideMenuItemWithSub>

      {/* ========================================================== ADDRESS */}
      <AsideMenuItemWithSub to='/address' title='آدرس' fontIcon='bi-archive' icon='/media/icons/duotone/Code/Compiling.svg'>
          <AsideMenuItem to='/address/overview' title='پیش نمایش' hasBullet={true}/>
          <AsideMenuItem to='/address/add' title='اضافه کردن' hasBullet={true}/>
      </AsideMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotone/Communication/Group-chat.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotone/Files/File.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div>
    </>
  )
}
