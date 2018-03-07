var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['button_class'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DEMO_BUTTON_TO + Blockly.Msg.DEMO_BUTTON);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['button_count'] = {
  init: function () {
    this.appendValueInput('count_')
        .setCheck('Number')
        .appendField(Blockly.Msg.DEMO_BUTTON_SET)
        .appendField(new Blockly.FieldVariable('button'), 'buttonVariable_')
        .appendField(Blockly.Msg.DEMO_BUTTON_TO_CREATE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.DEMO_BUTTON_BUTTONS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['button_text'] = {
  init: function () {
    this.appendValueInput('count_')
        .setCheck('Number')
        .appendField(Blockly.Msg.DEMO_BUTTON_SET)
        .appendField(new Blockly.FieldVariable('button'), 'buttonVariable_')
        .appendField(Blockly.Msg.DEMO_BUTTON_TEXT_OF);
    this.appendDummyInput()
        .appendField(Blockly.Msg.DEMO_BUTTON_BUTTON_TO);
    this.appendValueInput('text_')
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['button_listener'] = {
  init: function () {
    this.appendValueInput('button_')
        .setCheck('Number')
        .appendField(Blockly.Msg.DEMO_BUTTON_WHEN)
        .appendField(new Blockly.FieldVariable('button'), 'buttonVariable_')
        .appendField(Blockly.Msg.DEMO_BUTTON_BUTTON);
    this.appendDummyInput()
        .appendField(Blockly.Msg.DEMO_BUTTON_IS_BEING)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.DEMO_BUTTON_CLICK_EVENT, 'click'],
          [Blockly.Msg.DEMO_BUTTON_MOUSEOVER_EVENT, 'mouseover']
        ]), 'listener_')
        .appendField(Blockly.Msg.DEMO_BUTTON_WHEN_END);
    this.appendStatementInput('callback_')
        .setCheck(null)
        .appendField(Blockly.Msg.DEMO_BUTTON_DO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
