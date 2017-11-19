function Button(text) {
    this.text = text || "empty new button\(\)";
    console.log(this.text);
}
Button.prototype.create = function() {
    var self = this;
    this.$element = $('<button class="del">');
    this.$element.text(this.text);
    this.$element.click(function() {
        alert(self.text);
    });
    $('body').append(this.$element);

}
var btn1 = new Button();
$('#jq_creater').click(function() {
    btn1.create();
});
var adamButton = new Button("hej Adam!");
$('#jq_adam').click(function() {
    adamButton.create();
});
$('#remove').click(function() {
    $(".del").last().remove();
});