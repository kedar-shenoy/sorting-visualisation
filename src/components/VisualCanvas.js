import React from "react";
import p5 from "p5";
import InsertionSketch from "../sketches/insertion";
import QuickSortSketch from "../sketches/quicksort";
import BubbleSortSketch from "../sketches/bubble";
import MergeSortSketch from "../sketches/mergesort";
import HeapSortSketch from "../sketches/heap";

export class InsertionCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5(InsertionSketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export class QuickCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5(QuickSortSketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export class BubbleCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5(BubbleSortSketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export class MergeCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5(MergeSortSketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export class HeapCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5(HeapSortSketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}
