import React, { Component } from 'react';


export default class Skill extends Component{

    state = {
        fib : "",
        second : [],
        test : "",
        arr : [],
        answerFBB : "",
        answerArrayshift : "",
        answerFS : "",
        array_shift : [],
        answerAS : "",
        array_select : "",
        answer_array_shift : "",
        array_s : [],
        number : [],
        RL : "",
        RL_n : ""


    }

    onChangeHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }


    handleSubmit1 = (event) =>{
        event.preventDefault();
        return this.fibonacci(this.state.fib);
    }
    handleSubmit2 = (event) =>{
        event.preventDefault();
        return this.arrayShift(this.state.array_shift);
    }
    handleSubmit3 = (event) =>{
        event.preventDefault();
        return this.secondMax(this.state.second);
    }
    handleSubmit4 = (event) =>{
        event.preventDefault();
        return this.fizzbuzzbut(this.state.fbb);
    }


    fibonacci = (n) => {
        let answer = "";
        const list = [0, 1];
        for (let x = 2; x < n + 1; x += 1) {
            list.push(list[x - 2] + list[x - 1]);
        }
        answer = list[n];
        // console.log(answer)
        this.setState({answerFS : answer})
    }

    arrayShift =() =>{
        let check_tf_select = this.state.array_select
        let numOfRotations = this.state.number
        let max1st_st = this.state.array_shift.split(",")
        let arr = max1st_st
        let j = "", first = "" , last = "";  

        if(check_tf_select === "true"){ // Right
            for(let i = 0; i < numOfRotations-1; i++){  
                first = arr[0];  
                for(j = 0; j < arr.length-1; j++){  
                    arr[j] = arr[j+1];  
                }  
                arr[j] = first;  
            }  
              
        }else if(check_tf_select === "false"){
            for(let i = 0; i < numOfRotations; i++){  
                last = arr[arr.length-1];  
                for(j = arr.length-1; j > 0; j--){  
                    arr[j] = arr[j-1];  
                }  
                arr[0] = last;  
            }   
        }
        this.setState({answer_array_shift : arr })
            console.log(arr,check_tf_select);
    }

    fizzbuzzbut = (n) =>{
        let output = [];
        const map = {
          3: 'Fizz',
          5: 'Buzz',
          15: 'FizzBuzz'
        };
          const fizz = n % 3 * -1 + 3;
          const buzz = n % 5 + 5;
          const fizzBuzz = fizz * buzz;
          const value = map[fizzBuzz] || map[fizz] || map[buzz] || n;
          output.push(value);
          this.setState({ answerFBB : output});
    }

    secondMax = (arr) => {
        let max1st = arr;
        let max2nd = 0;

        if(max1st.length === 0){
            this.setState({ test : "Error!"})
        }else{
            let max1st_st = max1st.split(",")
            let max1st_st_le = max1st_st.length
            if(max1st_st_le > 2){
                for(var i=0; i<arr.length; i++) {
                    if(arr[i] > max1st) {
                      max2nd = max1st;
                      max1st = arr[i];
                    }
                    else if(arr[i] > max2nd && arr[i] !== max1st) {
                      max2nd = arr[i];
                    }
                  }
                  this.setState({ test : max2nd})
            }else if(max1st_st_le === 1){
                this.setState({ test : max1st})
            }
        }
    };
    

    render(){
        return(
            <div className="container">
                <div className="card-deck mb-12 text-center">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Fibonacci Sequence</h4>
                        </div>
                    <form onSubmit={this.handleSubmit1}>
                        <div className="card-body">
                            <div className="row">
                                <div class="col-md-6">
                                    <div class="form-group input-group-sm">
                                        <label>Fib</label>
                                        <input type="text" class="form-control form-control-lg" placeholder="Fib" name="fib" id="fib" value={this.state.fib} onChange={this.onChangeHandle} required="" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group input-group-sm">
                                        <label>คำตอบ</label>
                                        <input type="text" class="form-control form-control-lg" placeholder="คำตอบ" name="answer" id="answer" value={this.state.answerFS} onChange={this.onChangeHandle} required="" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success" onClick={this.handleSubmit1}> บันทึก</button>
                        </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Array shift</h4>
                        </div>
                    <form onSubmit={this.handleSubmit2}>
                        <div className="card-body">
                            <div className="row">
                                <div class="col-md-6">
                                    <div class="form-group input-group-sm">
                                        <label>Array shift</label>
                                        <input type="text" class="form-control form-control-lg" placeholder="array_shift" name="array_shift" id="array_shift" value={this.state.array_shift} onChange={this.onChangeHandle} required="" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div class="form-group input-group-sm">
                                        <label>Right/Left</label>
                                        <select class="form-control form-control-lg" name="array_select" value={this.state.array_select} onChange={this.onChangeHandle} >
                                            <option value="">select R/L</option>
                                            <option value={true}>Right</option>
                                            <option value={false}>Left</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div class="form-group input-group-sm">
                                        <label>Number</label>
                                        <input type="text" class="form-control form-control-lg" placeholder="number" name="number" id="number" value={this.state.number} onChange={this.onChangeHandle} required="" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className ="row">
                                <div className="col-md-6">
                                    <div class="form-group input-group-sm">
                                        <label>คำตอบ</label>
                                        <input type="text" class="form-control form-control-lg" placeholder="คำตอบ" name="answer_array_shift" id="answer_array_shift" value={this.state.answer_array_shift} onChange={this.onChangeHandle} required="" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" onClick={this.handleSubmit2}> บันทึก</button>
                    </div>
                    </div>
                </div>
                <div className="card-deck mb-12 text-center">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Second max</h4>
                        </div>
                    <form onSubmit={this.handleSubmit3}>
                        <div className="card-body">
                            <div className="row">
                                <div class="col-md-6">
                                    <div class="form-group input-group-sm">
                                        <label>Second max</label>
                                        <input type="text" class="form-control form-control-lg" placeholder="second" name="second" id="second" value={this.state.second} onChange={this.onChangeHandle} required="" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group input-group-sm">
                                        <label>คำตอบ</label>
                                        <input type="text" class="form-control form-control-lg" placeholder="คำตอบ" name="max" id="max" value={this.state.test} onChange={this.onChangeHandle} required="" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success" onClick={this.handleSubmit3}> บันทึก</button>
                    </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                    <form onSubmit={this.handleSubmit4}>

                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">FizzBuzz...But</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div class="col-md-6">
                                    <div class="form-group input-group-sm">
                                        <label>FizzBuzz...But</label>
                                        <input type="text" class="form-control form-control-lg" placeholder="fbb" name="fbb" id="fbb" value={this.state.fbb} onChange={this.onChangeHandle} required="" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group input-group-sm">
                                        <label>คำตอบ</label>
                                        <input type="text" class="form-control form-control-lg" placeholder="คำตอบ" name="answerfbb" id="answerfbb" value={this.state.answerFBB} onChange={this.onChangeHandle} required="" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success" onClick={this.handleSubmit4}> บันทึก</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}