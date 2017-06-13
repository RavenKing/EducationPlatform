import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Slider,
  ScrollView,
  ListView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper2';
import ViewMoreText from 'react-native-view-more-text';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    
    navbarStyle:{

        height: 55,
        width: ScreenWidth,
        //borderBottomWidth:0.5,
        //borderBottomColor:'#909090',
        justifyContent:'center',
        backgroundColor:'white',
    },

    scrollViewStyle:{

    },

    scrollContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'column',
        //backgroundColor:'blue',
        //height:100
    },

    swiperPicStyle: {
        width: ScreenWidth,
        height:ScreenHeight*0.35,
    },


    rowFrameStyle:{
        flexDirection:'row',
        alignItems:'flex-end',
        //backgroundColor:'yellow',
    },

    bigFrameStyle:{
        width:ScreenWidth*0.85,
        marginTop:18,
        //borderBottomWidth:0.5,
        //backgroundColor:'red'
        // borderBottomWidth:1,
        // borderBottomColor:'#707070',

    },


    cellRowStyle:{
        flexDirection:'row',
        justifyContent:'space-between',

    },

});



export default class AgencyPage2 extends Component {
	
    
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            eventDataSource: ds.cloneWithRows([
                {"title": "英国预科班","imagesrc":require("../../../img/Activities/oversea.jpg")},
                {"title":"澳洲班","imagesrc":require("../../../img/Activities/oversea.jpg")},
                {"title":"美高班","imagesrc":require("../../../img/Activities/oversea.jpg")}
            ]),

            nowEnrollingDataSource: ds.cloneWithRows([
                {"title": "英国预科班","imagesrc":require("../../../img/Activities/oversea.jpg")},
            ])
        };
    }

    renderEventRow(rowData,sectionID,rowID,highlightID){

        console.log(rowData.imagesrc.toString());

        var data  = rowData.imagesrc;
        console.log(data)
            return(
              <View>
                <Image source={data} style={{width:80,height:120, marginBottom:5, marginRight:20}}/>
                <Text style={{fontWeight: 'bold', color:'#3c3c3c',fontSize: 13,width:80,}}>
                    {rowData.title}
                </Text>

              </View>
            );

    }

	//第三方组件：文本展开跟多的方法
	renderViewMore(onPress){
        return(
            <Text onPress={onPress} style={{color:'#F37298',fontSize: 13, lineHeight:20}}>...了解更多</Text>
        )
    }

    renderViewLess(onPress){
        return(
            <Text onPress={onPress} style={{color:'#F37298',fontSize: 13, lineHeight:20}}>隐藏</Text>
        )
    }





  render() {
    return (
	    <View style={{flex:1,backgroundColor:'white'}}>

			<ScrollView 
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollViewStyle}
                >
	    			{/*图片轮播*/}
                    <Swiper
                        style={styles.swiperStyle}
                        height={ScreenHeight*0.35}
                        autoplay={true}
                        autoplayTimeout={2.6}
                        dot={<View 
                            style={{backgroundColor:'grey', 
                            width: 5, 
                            height: 5,
                            borderRadius: 4, 
                            marginLeft: 3, 
                            marginRight: 3, 
                            marginTop: 3, 
                            marginBottom: 0,}} 
                        />}
                        activeDot={
                            <View style={{backgroundColor: 'white', 
                            width: 5, 
                            height: 5, 
                            borderRadius: 4, 
                            marginLeft: 3, 
                            marginRight: 3, 
                            marginTop: 3, 
                            marginBottom: 0,}} 
                        />}

                    >
                        <Image source={require('../../../img/Paddington/1.jpeg')} style={styles.swiperPicStyle}/>
                        <Image source={require('../../../img/Paddington/2.jpeg')} style={styles.swiperPicStyle}/>
                        <Image source={require('../../../img/Paddington/3.jpeg')} style={styles.swiperPicStyle}/>
                    </Swiper>

                    {/*标题框*/}
                    <View style={styles.bigFrameStyle}>
                        {/*大标题*/}
                        <Text style={{fontWeight: 'bold', color:'#2d2d2d',fontSize: 26, marginBottom:6,}}>
                            上海帕丁顿双语学校
                        </Text>
                        {/*地点信息*/}
                        <View style={styles.rowFrameStyle}>
                            <Image source={require('../../../img/location4.png')} style={{height:18,width:18,marginRight:12}}/>
                            <Text style={{fontSize: 13, color:'#707070'}}>
                                奉贤区八字桥路686号
                            </Text>
                        </View>
                        
                        {/*分割线*/}
                        <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    </View>
		

					{/*简介框*/}
                    <View style={styles.bigFrameStyle}>
                        <Text style={{color:'#3c3c3c',fontSize: 16, marginBottom:14}}>
                            学校简介：
                        </Text>
                        <ViewMoreText
                            numberOfLines={6}
                            renderViewMore={this.renderViewMore}
                            renderViewLess={this.renderViewLess}
                        >
                            <Text style={{fontSize: 13, color:'#707070', lineHeight: 20}}>
                               上海帕丁顿双语学校是是由上海交通大学教育集团全面输出教育管理，
                               涵盖K12（小学、初中、高中）教育体系，以中西合璧的课程为载体全封闭寄宿制双语学校。
                               依托百年交大雄厚的教育资源平台，整合世界高端的优质教育资源，全力打造现代化、特色化、国际化名校。
								{'\n'}交大教育集团副总裁、上海市名校长、华东师大教育博士董俊平先生担任总校长。
								校长站在教育最前沿，领衔并汇集全国高校、名校的教育专家、学科专家，带领一群有教育追求的新生代教师，
								创办奉贤第一所具有国际化、现代化、多样化办学双语学校。
                            </Text>
                        </ViewMoreText>
                        {/*分割线*/}
                        <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    </View>
					
					{/*招生简章*/}
                    <TouchableOpacity>
                        <View style={styles.bigFrameStyle}>
                            <View style={styles.cellRowStyle}>
                                <Text style={{color:'#3c3c3c',fontSize: 16}}>最新招生简章</Text>
                                <Text style={{color:'#F37298',fontSize: 16}}>查看</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/*分割线*/}
                    <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>



					{/*办学优势*/}
                    <View style={styles.bigFrameStyle}>
                        <Text style={{color:'#3c3c3c',fontSize: 16, marginBottom:14}}>
                            办学优势：
                        </Text>
                        <ViewMoreText
                            numberOfLines={3}
                            renderViewMore={this.renderViewMore}
                            renderViewLess={this.renderViewLess}
                        >
                            <Text style={{fontSize: 13, color:'#707070', lineHeight: 20}}>
								1. 先进的教育平台以及成熟的教育管理体系。学校凭借交大高校的集团化管理，以高校和基础教育的联动、国内外姊妹学校的联动，实现优势互补资源共享的集团教育模式。以中西合璧的课程与教学体系、适合学生生活规律的精致服务、符合各学段学生特点的特色教育等，形成激活内涵发展原动力、实现学校跨越式发展的办学模式。
								{'\n'}{'\n'}
								2. 一流的现代化教育设施。学校现有占地57259.3平方米，配有标准化的运动场、游泳馆、击剑馆、食堂、学生公寓、国际化的多功能教室，音乐教室、舞蹈房、电脑房、心理教育活动室、国际课程学习区、报告厅，以及与上海课程配套的实验室等。另外有体育俱乐部、崭新的室内游泳馆、击剑馆、民俗馆、篮球馆等，为学生学习生活提供保障。
								{'\n'}{'\n'}
								3. 寄宿制学校精致化管理。24小时全监护的医疗保险系统、校园一卡通的智能化的管理，网络互补的安全监控机制。
								{'\n'}{'\n'}
								4. 中西合璧的课程体系。学校为学生设计了中西合璧的人文课程；指向未来的科学课程；陶冶心灵的艺术课程；创新实践的社会课程；强身健体的健康课程。2015年至今，帕丁顿双语学校在学科建设、教学服务、课程资源开发进行了大力投入。另外，书法国学、形体武术、手工、中英文绘本阅读、特色英语语音课等校本课程，30个校内创意小社团等形式多样、内容丰富的素养类课程已经在学校开展。
                            </Text>
                        </ViewMoreText>
                        {/*分割线*/}
                        <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    </View>

                    {/*精选课程活动*/}
                    <View style={styles.bigFrameStyle}>
                        <Text style={{color:'#3c3c3c',fontSize: 16, marginBottom:20,}}>
                            课程活动精选：
                        </Text>


                        <View style={styles.container}>
                            <ListView
                                dataSource={this.state.eventDataSource}
                                renderRow={this.renderEventRow}
                                horizontal={true}
                            />
                        </View>
                        {/*分割线*/}
                        <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    </View>

                    {/*正在报名中*/}
                    <View style={styles.bigFrameStyle}>
                        <Text style={{color:'#3c3c3c',fontSize: 16, marginBottom:20,}}>
                            火热报名中：
                        </Text>


                        <View style={styles.container}>
                            <ListView
                                dataSource={this.state.nowEnrollingDataSource}
                                renderRow={this.renderEventRow}
                                horizontal={true}
                            />
                        </View>
                        {/*分割线*/}
                        <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>
                    </View>


					{/*网站*/}
                    <TouchableOpacity>
                        <View style={styles.bigFrameStyle}>
                            <View style={styles.cellRowStyle}>
                                <Text style={{color:'#3c3c3c',fontSize: 16}}>官方网站</Text>
                                <Text style={{color:'#F37298',fontSize: 16}}>查看</Text>
                            </View>
                            
                            <Text style={{fontSize: 13, color:'#707070', lineHeight: 20}}>
                                http://www.padingdun.com.cn/about
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/*分割线*/}
                    <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>

                    {/*电话号码*/}
                    <TouchableOpacity>
                        <View style={styles.bigFrameStyle}>
                            <View style={styles.cellRowStyle}>
                                <Text style={{color:'#3c3c3c',fontSize: 16}}>联系电话</Text>
                                <Text style={{color:'#F37298',fontSize: 16}}>致电</Text>
                            </View>
                            
                            <Text style={{fontSize: 13, color:'#707070', lineHeight: 20}}>
                                021-60975933
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/*分割线*/}
                    <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>

                    {/*邮箱*/}
                    <TouchableOpacity>
                        <View style={styles.bigFrameStyle}>
                            <View style={styles.cellRowStyle}>
                                <Text style={{color:'#3c3c3c',fontSize: 16}}>联系邮箱</Text>
                                <Text style={{color:'#F37298',fontSize: 16}}>联系</Text>
                            </View>
                            
                            <Text style={{fontSize: 13, color:'#707070', lineHeight: 20}}>
                                fanxy@padingdun.com.cn
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/*分割线*/}
                    <Image source={require('../../../img/string.png')} style={{height:1,width:ScreenWidth*0.85,marginTop:18}}/>                    


                    {/*垫底View，为了让最后的组件和底部导航栏有一些间隙，是个笨办法*/}
                    <View style={{height:25,width:ScreenWidth}}/>


            </ScrollView>


	    </View>
    );
  }
}

//输出类
module.exports = AgencyPage2;