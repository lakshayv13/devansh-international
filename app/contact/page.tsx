"use client";
import { subtitle, title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import clsx from "clsx";
import PinCard from "./pinCard";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { MeteorCard } from "./meteorCard";
import { useState } from "react";

export default function ContactPage() {

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="-mt-20">
      <h1 className={clsx(title(), "hidden lg:block")}>Our Offices</h1>
      <div className="hidden lg:flex justify-around gap-x-0 xl:gap-x-5 -mt-14">
        {siteConfig.addresses.map((item) => {
          return (
            <PinCard location={item.location} state={item.state} name={item.name} number={item.number} mail={item.mail} address={item.address} />
          )
        })}
      </div>
      <div className="flex flex-wrap justify-center lg:hidden sm:flex-nowrap gap-5 mb-[5rem]">
        {siteConfig.addresses.map((item) => {
          return (
            <MeteorCard state={item.state} name={item.name} number={item.number} mail={item.mail} location={item.address} />
          )
        })}
      </div>
      <div className="flex w-full items-center justify-between -mt-5">
        <div className="w-full">
        <h1 className={title()}>Get in&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Touch</h1>
        <h1 className={title()}>.</h1>
        <h1 className={clsx(subtitle(), "text-md lg:text-lg text-slate-400")}>Fill out the from below and we'll get back to you as soon as.</h1>
        <form
          className="grid gap-y-5 mt-5 w-full"
        >
          <div className="flex w-full flex-wrap sm:flex-nowrap gap-4">
            <Input size="md" type="text" label="First Name" value={fName} onChange={(e) => {setFName(e.target.value)}} required />
            <Input size="md" type="text" label="Last Name" value={lName} onChange={(e) => {setLName(e.target.value)}} required  />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-4">
            <Input size="md" type="email" label="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} required  />
            <Input size="md" type="text" label="Mobile Number" value={mobile} onChange={(e) => {setMobile(e.target.value)}} required  />
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <Input size="md" type="text" label="Subject" value={subject} onChange={(e) => {setSubject(e.target.value)}} required  />
          </div>
          <Textarea
            label="Message"
            type="text"
            className="max-w-full"
            value={message} onChange={(e) => {setMessage(e.target.value)}}
            required
          />
          <Button color="secondary" className="h-[50px]">
            Submit
          </Button> 
        </form>
        </div>
        <Image src="/contact.png" alt="didc" width={600} height={600} className="hidden lg:inline" />
       </div>
    </div>
  );
}
