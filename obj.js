class ITS_Tag {
    constructor(name, low, high) {
        this.name = name;
        this.low = low;
        this.high = high;
    }
    random() {
        return this.low + Math.random() * (this.high - this.low);
    }
}
module.exports = ITS_Tag;