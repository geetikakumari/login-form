function validate()
{
  var name=document.myform.name.value;
  var password=document.myform.password.value;

  var x=document.myform.email.value;
  var atposition=x.indexOf("@");
  var dotposition=x.lastIndexOf(".");
  var contact=document.myform.contact.value;
  var a = document.myform.add.value;

  name=name.trim();
  a=a.trim();
  if(!/^[A-Za-z ]+$/.test(name))
    {
      alert("Please enter characters only in the name field!");
      return false;
    }
if(password.length<6)
    {
          alert("Password must be at least 6 characters long.");
          return false;
    }

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
      {
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
        return false;
      }
    if(!/^(9|8|7)\d{9}$/.test(contact))
      {
        alert("please enter correct phone number");
        return false;
      }

    if(a=="")
      {
        alert("Please Enter Your Details Here");
          return false;

      }

alert("Hello "+name);
}
