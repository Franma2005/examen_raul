import React from 'react';
import { View, Text, Switch, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SistemasRiego } from '../entities/sistemasRiego';
import { RootState } from '../redux/store';
import { riego, setRiego } from '../redux/slices/riegoSlice';

interface Props {
    item: riego,
    onUpdate: (newGroups : riego[]) => void 
}

const GrupoComponent = ({ item , onUpdate }: Props) => {
    const dispatch = useDispatch();
    const grupos = useSelector((state : RootState) => state.riego.grupos);
    const handleSwitchToggle = (nombreValvula: string, currentState: boolean) => {
        const newGroups = grupos.map(group => {
          if (group.name === item.name) {
            const valvulaActualizada = group.values.map(valve => 
              valve.name === nombreValvula ? { ...valve, state: !currentState } : valve
            );
            return { ...group, values: valvulaActualizada };
          }
          return group;
        });
    
        dispatch(setRiego(newGroups));
        onUpdate(newGroups);
      };

    return (
        <View>
            <Text>{item.name}</Text>
            <FlatList
                data={item.values}
                keyExtractor={(value, index) => index.toString()}
                renderItem={({ item: value }) => (
                    <View>
                        <Text>{value.name}</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            onValueChange={() => handleSwitchToggle(value.name, value.state)}
                            value={value.state}
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default GrupoComponent;