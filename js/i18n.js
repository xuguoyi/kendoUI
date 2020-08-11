define([], function(){
  let messages = Object.create(null);
  function load(lang){
    require([`../locales/${lang}`], function(langs){
      messages = langs;
    });
  }
  function $t(form, key){
    return messages[form][key] || '';
  }
  return {load, $t}
});