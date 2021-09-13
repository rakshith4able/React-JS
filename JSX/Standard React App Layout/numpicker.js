// We will make a numPicker of 0 to 10 on return of 7 its success or else failure


function getNum() {
    return Math.floor(Math.random() * 10 + 1);
}

//one way of adding conditionals is by using ternary operator (condition)?(true):(false)
//To do that lets get no. into variable  inside of rendor() not in return 
//use ternary operator to add conditional in second h2
//another way of doing that is using && - its shown is third h2
//another way is by adding if-else in rendor method
class NumPicker extends React.Component {

    render() {
        let num = getNum();
        let msg;
        if (num == 7)
            msg = <div><h1>Success</h1><h2>You are legend</h2></div>
        else
            msg = <p>failed sad!</p>
        return (<div>
            <h2>The number is {num}</h2>
            <h2>{num == 7 ? "Congrats!" : "Loser!"} </h2>
            <h2>{num == 7 && <img src="https://images.unsplash.com/photo-1560364897-91578ff41817?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" />}</h2>
            {msg}
        </div>)
    }
}
