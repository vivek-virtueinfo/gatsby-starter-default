import React, { Component } from 'react';

class movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.data.title,
            trailer: this.props.data.trailer,
            genre: this.props.data.genre,
            image: this.props.data.image,
            about: this.props.data.about,
            buttonText: 'Play'
        }
        this.onClick = this.onClick.bind(this);
        this.changeMovie = this.changeMovie.bind(this);
    }

    onClick(){ 
        this.setState({
            trailer: this.state.trailer + '?autoplay=1',
            buttonText: 'Playing'
        });    
    }

    changeMovie(){
        if(this.state.title === 'Sooryavanshi'){
            this.setState({
                title: 'Good Newwz',
                genre: 'Comedy',
                trailer: 'r9VJpqoAr84',
                about: 'Two couples with the same surnames pursue in-vitro fertilisation and wait for their upcoming babies. Trouble ensues when they find that the sperms of each couple have been mixed with each other.',
                image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThjX41i3UMbdX6RGLScpWs3dq2PrBaWNQRfJxoz9VKtY1p95Rp',
            });
            return;
        }
        this.setState({
            title: 'Sooryavanshi',
            genre: 'Action',
            trailer: 'u5r77-OQwa8',
            about: 'Sooryavanshi is an upcoming Indian Hindi-language action film directed by Rohit Shetty and written by Yunus Sajawal. Produced by Hiroo Yash Johar, Aruna Bhatia, Apoorva Mehta and Rohit Shetty.',
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSklj7U-wjit6dvK2gjU7RYdjxfkeDg91l_UqvzolUbLeYogX81',
          });
    }

    render() {
        return (
            <div>Hello</div>
        );
    }
}

export default movie;