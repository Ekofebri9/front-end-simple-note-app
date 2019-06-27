import React from "react";
import { FlatList, Text, View, Dimensions } from "react-native";
var {width, hight}=Dimensions.get('window');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
            "id_note":38,
            "title":"work5",
            "content":"i will do my best",
            "date":"2019-06-20T05:59:42.000Z",
            "date_update":"2019-06-20T05:59:42.000Z",
            "category":"yearly"
        },
        {
            "id_note":37,
            "title":"work4",
            "content":"today must be finish",
            "date":"2019-06-20T05:59:42.000Z",
            "date_update":"2019-06-20T05:59:42.000Z",
            "category":"yearly"
        },
        {
            "id_note":36,
            "title":"work3",
            "content":"for tomorrow",
            "date":"2019-06-20T05:59:42.000Z",
            "date_update":"2019-06-20T05:59:42.000Z",
            "category":"yearly"},
        {
            "id_note":35,
            "title":"work2",
            "content":"not yettttt",
            "date":"2019-06-20T05:59:42.000Z",
            "date_update":"2019-06-20T05:59:42.000Z",
            "category":"yearly"
        },
        {
            "id_note":34,
            "title":"work1",
            "content":"i have done ",
            "date":"2019-06-20T05:59:42.000Z",
            "date_update":"2019-06-20T05:59:42.000Z",
            "category":"yearly"
        },
        {
            "id_note":25,
            "title":"ujian3",
            "content":"belajar mulai besok/sekarang",
            "date":"2019-06-20T05:49:36.000Z",
            "date_update":"2019-06-20T05:49:36.000Z",
            "category":"daily"
        },
        {
            "id_note":24,
            "title":"ujian2",
            "content":"belajar mulai besok sekarang",
            "date":"2019-06-20T05:48:57.000Z",
            "date_update":"2019-06-20T05:48:57.000Z",
            "category":"yearly"
        },
        {
            "id_note":23,
            "title":"ujian1",
            "content":"belajar mulai sekarang",
            "date":"2019-06-20T05:48:18.000Z",
            "date_update":"2019-06-20T05:48:18.000Z",
            "category":"yearly"
        },
        {
            "id_note":9,
            "title":"tugas5",
            "content":"harus selesai sebelum deadline oke",
            "date":"2019-06-19T14:35:27.000Z",
            "date_update":"2019-06-19T14:36:03.000Z",
            "category":"daily"
        }
    ],
      stickyHeaderIndices: []
    };
  }
  componentWillMount() {
    var arr = [];
    this.state.data.map(obj => {
      if (obj.id_note) {
        arr.push(this.state.data.indexOf(obj));
      }
    });
    arr.push(0);
  }
  renderItem = ({ item }) => {
      return (
        <View style={{width: 0.4*width, hight:0.2*hight,margin:10, backgroundColor:'blue',borderRadius: 15}}>
        <Text>judul= {item.title}</Text>
        <Text>isi= {item.content}</Text>
        <Text>tgl= {item.date}</Text>
        <Text>tgl= {item.date_update}</Text>
        <Text>kategory= {item.category}</Text>

        </View>
            
          
      );
  };
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id_note}
        numColumns={2}
      />
    );
  }
}