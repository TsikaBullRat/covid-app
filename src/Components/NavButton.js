import React from 'react';
import {} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';

export const NavButton = props =>{
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}>
                <DrawerItem
                    label="Close"
                    onPress={()=>props.navigation.closeDrawer}
                />
                <DrawerItem
                    label="Open"
                    onPress={()=>props.navigation.openDrawer}
                />
            </DrawerItemList>
        </DrawerContentScrollView>
    );
}