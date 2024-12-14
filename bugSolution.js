The solution is to access the props within `useEffect` hook with an empty dependency array to ensure it runs after mounting.

```javascript
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = (props) => {
  useEffect(() => {
    console.log(props.someProp); // Access props after mount
  }, []);

  return (
    <View>
      <Text>Component Mounted</Text>
    </View>
  );
};

export default MyComponent;
```