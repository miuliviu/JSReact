import React, { Component } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import {loadSettings} from './helpers';

export class DynamicRenderingExample extends Component{
    constructor(props) {
      super(props);
      this.setState = this.setState.bind(this);
      this.state = {
          items: []
      };
    }

    componentWillMount(){
        this.gatherItems();
    }

    gatherItems = () => {
        /* ... initializations code... */

        loadSettings('dataset', 'keyName', function(data){
            var array = JSON.parse(data);
            var processing = [];

            /* ... processing data code... */

            var result = [];
            for (var key in processing[0]) {
                if(processing[0].hasOwnProperty(key)){
                    companyImage = 'https://logo.api.com/' + companyName + '?s=32';
                    result.push(this.renderItem(key, processing[0][key], companyImage));
                }
            }
            this.setState({items: result});
        }.bind(this));
    }

    renderItem = (title, visitCount, image) => {
        return(
            <View style={styles.container}>
                <View style={styles.contentLeft}>
                    <Image
                        style={{borderRadius: 4, marginTop: 5, marginBottom: 5, height: 32, width: 32}}
                        source={{uri: image}}
                    />
                    <Text style={{marginLeft: 15, fontSize:17}}>
                        {title}
                    </Text>
                </View>
                <View style={styles.contentRight}>
                    <Text style={{fontSize:17}}>
                        {visitCount}
                    </Text>
                </View>
            </View>
        );
    }
}
