import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function DrawerButton() {
  return (
    <TouchableOpacity>
      <Feather name="menu" size={24} color="black" />
    </TouchableOpacity>
  );
}