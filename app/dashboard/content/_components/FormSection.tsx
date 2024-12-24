"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>();

  const handleChangeEvent = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
    // console.log(formData)
  };

  return (
    <div className="p-5 shadow md-border rounded-lg bg-white">
      <Image
        src={selectedTemplate?.icon || "/logo"}
        alt="icon"
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl text-primary mb-2">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item: any, index: any) => (
          <div className="my-2 flex flex-col gap-2 mb-7" key={index}>
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleChangeEvent}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleChangeEvent}
              />
            ) : null}
          </div>
        ))}

        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading&&<Loader2Icon className="animate-spin" />}
          Generate
        </Button>
      </form>
    </div>
  );
}

export default FormSection;