Blockly.JavaScript['button_class'] = function (block) {
  var id = block.id.replace(/[^a-zA-Z0-9]/g, '');
  var code = 'new demoButton(\'' + id + '\')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['button_count'] = function (block) {
  var variable_buttonvariable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('buttonVariable_'), Blockly.Variables.NAME_TYPE);
  var value_count_ = Blockly.JavaScript.valueToCode(block, 'count_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_buttonvariable_ + '.setButton(' + value_count_ + ');\n';
  return code;
};

Blockly.JavaScript['button_text'] = function (block) {
  var variable_buttonvariable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('buttonVariable_'), Blockly.Variables.NAME_TYPE);
  var value_count_ = Blockly.JavaScript.valueToCode(block, 'count_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text_ = Blockly.JavaScript.valueToCode(block, 'text_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_buttonvariable_ + '.getButton(' + value_count_ + ').text(' + value_text_ + ');\n';
  return code;
};

Blockly.JavaScript['button_listener'] = function (block) {
  var variable_buttonvariable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('buttonVariable_'), Blockly.Variables.NAME_TYPE);
  var value_button = Blockly.JavaScript.valueToCode(block, 'button_', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_listener_ = block.getFieldValue('listener_');
  var statements_callback_ = Blockly.JavaScript.statementToCode(block, 'callback_');
  var code = variable_buttonvariable_ + '.getButton(' + value_button + ').on(\'' + dropdown_listener_ + 
    '\', async function (e) {\n' + statements_callback_ + '});\n';
  return code;
};