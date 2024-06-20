import { Image } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../paginas/Home';
import Login from '../paginas/Login'
import ListaPets from '../paginas/ListaPets';
import Mensagem from '../paginas/Mensagem';
import Sobre from '../paginas/Sobre';
import Perfil from '../paginas/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
    return (
        <Drawer.Navigator 
            screenOptions={{
                drawerStyle: {                
                    backgroundColor: '#36D6aD',
                    },
                drawerLabelStyle: {
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight:20
                }
                }
            }
        >
            <Drawer.Screen 
                name='Lista de Pets' 
                component={TabRoutes} 
                options={
                    {
                    drawerLabel: 'Pets para adoção',
                    headerTransparent: true,
                    title: '',
                    drawerIcon: 
                        () => 
                            <Image 
                                source={require('../assets/pets.png')} 
                                style={{width: 24, height:24}}
                                
                                />
                    }
                }
            />
            <Drawer.Screen 
                name='Perfil' 
                component={Perfil} 
                options={
                    {
                    drawerLabel: 'Perfil',
                    headerTransparent: true,
                    title: '',
                    drawerIcon: 
                        () => 
                            <Image 
                                source={require('../assets/avatar.png')} 
                                style={{width: 24, height:24}}
                                />
                    }
                }
            />
            <Drawer.Screen 
                name='Sair' 
                component={Home}
                options={{
                    headerTitle: '',
                    headerShown: false
                    }}
            />
        </Drawer.Navigator>
    )
}

function TabRoutes() {
    return (
        <Tab.Navigator 
            initialRouteName="Lista de Pets"
            screenOptions={
                {
                headerTitle: '',
                headerShown: false
                }
        }>
            <Tab.Screen 
                name='Lista de Pets' 
                component={ListaPets} 
                options={{
                    tabBarIcon: () => (
                        <Image 
                            source={require('../assets/pets-green.png')} 
                            style={{width:24, height:24}}
                            />
                    )
                }}
            />
            <Tab.Screen 
                name='Mensagem' 
                component={Mensagem}
                options={{
                        tabBarIcon: () => (
                            <Image 
                                source={require('../assets/mensagens.png')} 
                                style={{width:24, height:24}}
                                />
                        )
                    }} 
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {

    return (
        <NavigationContainer>
           <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={
                    {
                    headerTitle: '',
                    headerShown: false
                    }
                }
            >
                <Stack.Screen 
                    name="Home" 
                    component={Home}  
                    
                />   
                <Stack.Screen name="Login" component={Login} />   
                <Stack.Screen name='Draw' component={DrawerRoutes} />
                <Stack.Screen name='Sobre' component={Sobre} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
