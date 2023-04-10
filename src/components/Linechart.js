import React from 'react'
import {Line} from 'react-chartjs-2';
import {Col,Row,Typography} from  'antd'
const Linechart = ({coinHistroy,currentPrice,coinName}) => {
    // console.log(coinHistroy)

    const {Title}= Typography;
    const coinPrice=[];
    const coinTimeStamp=[];
    for(let i=0; i<coinHistroy?.data?.histroy?.length; i++){
        coinPrice.push(coinHistroy.data.histroy[i].price)
        coinTimeStamp.push(new Date(coinHistroy.data.histroy[i].timestamp).toLocaleDateString())
    }
    const data={
        labels:coinTimeStamp,
        datasets:[
            {
                label:'Price in USD',
                data:coinPrice,
                fill:false,
                backgroundColor:'#0071bd',
                borderColor:'#0071bd'
            }
        ]
    };
    const options = {
        scales: {
          yAxis: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      
    // const options={}
  return (
    <>
        <Row className="chart-header">
            <Title level={2} className="chart-title">{coinName} Price chart</Title>
            <Col className="price-container">
                <Title level={5} className="price-change">{coinHistroy?.data?.change}%</Title>
                <Title level={5} className="current-price">Current {coinName} Price:${currentPrice}</Title>
            </Col>
        </Row>
        {/* <Line data={data} options={options}/> */}
    </>
  )
}

export default Linechart