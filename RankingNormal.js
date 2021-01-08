import React from "react";
import firebase from 'firebase';
import 'firebase/storage';

class RankingNormal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            userData:[],
        }
        this.sortData = this.sortData.bind(this);
    }
    getFireData(){
        //database取得
        let db = firebase.database();
        //データパスの取得
        let ref = db.ref("userInfo/");

        let self=this;
        //データ取得時のメソッド
        ref
            //並び変えメゾット
            //キーによって並び変える
            .orderByKey()
            //フィルターメゾット
            //最初から引数の数だけ取り出す
            .limitToFirst(5)
            //第一引数処理のイベント名
            //snapshotはイベント時にうけとった
            //データの情報をまとめたオブジェクト
            .on('value',snapshot=>{
                self.setState({
                    data:snapshot.val()
                });
            });
    }

    sortData(){
        let x = 9999;
        this.state.data.sort();
        console.log(this.state.data[0].ID);
    }

    render(){
        return (
            <div><br />
                <div onClick={this.sortData}></div>
                <div><span style={{paddingRight:70, color: "#FFFFFF"}}>BestTime</span>　<span style={{color: "#FFFFFF"}}>Name</span></div> <br />
                <div><span style={{paddingRight:100, color: "#FFFFFF"}}>w</span>　<span style={{color: "#FFFFFF"}}>w1</span></div> 
                <div><span style={{paddingRight:100, color: "#FFFFFF"}}>s</span>　<span style={{color: "#FFFFFF"}}>s1</span></div> 
                <div><span style={{paddingRight:100, color: "#FFFFFF"}}>j</span>　<span style={{color: "#FFFFFF"}}>j1</span></div> 
                <div><span style={{paddingRight:100, color: "#FFFFFF"}}>f</span>　<span style={{color: "#FFFFFF"}}>f1</span></div> <br />
            </div>  
                
        );
    }
}
export default RankingNormal;