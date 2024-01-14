import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [picture, setPicture] = useState("");
  // const { toast } = useToast()
  const navigate = useNavigate();

  const postDetails = (pic : any) => {
    if(pic===undefined){
      toast('Please select an image')
      return;
    }
    if(pic.type==="image/jpeg" || pic.type==="image/png" || pic.type==="image/jpg"){
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-application");
      data.append("cloud_name", "dyhb5midi");
      fetch("https://api.cloudinary.com/v1_1/dyhb5midi/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          
          setPicture(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else{
      toast('Please select image file')
    }
  }

  const handleSubmit = async() => {
    console.log("lalalla");
    
    if(name==="" || email==="" || password==="" || picture===""){
      
      toast('Please fill all the details')
      return;
    }

    if(password!==confirmpassword){
      toast('Password and Confirm Password should be same')
      return;
    }
    
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user",
        { name, email, password, picture },
        config
      );
      toast('Account created successfully')
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate('/chat');
    } catch (error) {
      toast('Problem with the Server Try again')
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            Change your password here. After saving, you'll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="current">Enter your Name</Label>
            <Input
              id="current"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">Email</Label>
            <Input
              id="new"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">Password</Label>
            <Input
              id="new"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">Confirm Password</Label>
            <Input
              id="new"
              type="text"
              value={confirmpassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" accept="image/*" onChange={(e) => {postDetails(e.target.files[0])}} />
          </div>
        </CardContent>
        <CardFooter>
          <Toaster />
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
