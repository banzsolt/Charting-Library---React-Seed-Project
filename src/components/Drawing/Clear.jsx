class Clear extends React.Component {
	constructor(props){
		super(props)
		this.bindCorrectContext()
	}
	bindCorrectContext(){
		this.clearDrawings = this.clearDrawings.bind(this)
	}
	clearDrawings(){
		this.props.ciq.clearDrawings()
	}
	render(){
			return(
				<button className={"ciq-btn " + (this.props.ciq.drawingObjects.length?'active':'')} onClick={this.clearDrawings}>Clear</button>
			)
	}
}
export default Clear
