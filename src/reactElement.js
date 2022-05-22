class StateGroup extends React.Component {
    render() {
        let State = this.props.State;
        let Color = String();
        let IconStyle = String();
        let value1 = this.props.value1;
        let value2 = this.props.value2;
        let value3 = this.props.value3;
        let value4 = this.props.value4;
        if (State === "") {
            Color = "";
            IconStyle = "./src/icon/anger.png";
        }
        else if (State >= 0 && State <= value1) {
            Color = "StatusNormal";
            IconStyle = "./src/icon/laughing.png";
        }
        else if (State > value1 && State <= value2) {
            Color = "StatusNormal";
            IconStyle = "./src/icon/smiley.png";
        }
        else if (State > value2 && State <= value3) {
            Color = "StatusNormal";
            IconStyle = "./src/icon/cryingface.png";
        }
        else if (State > value3 && State <= value4) {
            Color = "StatusSafe";
            IconStyle = "./src/icon/cry.png";
        }
        else if (State > value4) {
            Color = "StatusDanger";
            IconStyle = "./src/icon/anger.png";
        }
        return <div className="btn SensorGroup">
            <div className="ReportLabel">
                <img className="GroupImg" alt={this.props.name} src={this.props.Imgs}></img>
            </div>
            <div className={"GroupState " + Color}>
                {State} <span>{this.props.unit}</span>
            </div>
            <div>
                <img className="FaceIcon" alt="" src={IconStyle}></img>
            </div>
        </div>;
    }
}