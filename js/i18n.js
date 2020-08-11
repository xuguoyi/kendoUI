define([], function(){
  let messages = Object.create(null);
  function load(lang){
    require([`../locales/${lang}`], function(langs){
      messages = langs;
    });
  }
  function $t(form, key, params){
    let msg = '';
    if(form &&  messages[form]){
      msg = messages[form][key] || '';
    }
    $.each(params, function(key, val){
      msg = msg.replace(new RegExp(`{${key}}`, 'ig'), val);
    })
    return msg;
  }
  return {load, $t}
});