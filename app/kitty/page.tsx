'use client'
import Image from "next/image";
import kittyLogo from "@/public/kitty_translate_logo-nobg.png";
import {Button, Textarea} from "flowbite-react";
import {TextToSpeech} from "@/app/components/TextToSpeech";
import CatFact from "@/app/components/CatFact";
import CatGpt from "@/app/components/CatGpt";
import React, {useState} from "react";

const purrKeywords = ["love", "amo", "ami", "ama", "coccole", "tesoro", "cucci", "amore", "canna"]
export default function Page() {
    const [inputText, setInputText] = useState("")
    const [translatedText, setTranslatedText] = useState("")
    const [detectedLanguage, setDetectedLanguage] = useState("")
    const detectLanguage = async (text: string) => {
        console.log("detecting language")
        // try {
        //     const response = await axios.post('/api/detectLanguage', {
        //         text: text,
        //     });
        //     setDetectedLanguage(response.data.language);
        // } catch (error) {
        //     console.error('Error checking word existence:', error);
        // }
    };
    const translateWord = (word: string): string => {
        word = word.trim()
        if (!word) {
            return ""
        }
        if (purrKeywords.includes(word)) {
            return "prrrr"
        }
        if (word.length < 4) {
            return "mia"
        }
        return "miao"
    }

    const translateText = () => {
        let splittedText = inputText.split(" ")
        if (splittedText.length > 2) {
            splittedText = splittedText.filter((word: string, index: any)=>{
                console.log("word: ", word)
                if (word.trim() == "") {
                    return false
                }
                if (purrKeywords.includes(word)) {
                    return true
                }
                if (index % 3 == 0) {
                    console.log("can be divi by 3")
                    return true
                }
                return false
            })
        }
        setTranslatedText(splittedText.map((word: string)=> {
            return translateWord(word)
        }).join(" "))
    }
    const onTranslateButtonClick = () => {
        console.log("translate button clicked, translating...")
        if (inputText) {
            detectLanguage(inputText).then(() => translateText())
        } else {
            setTranslatedText("")
        }
    }
    const onTextInputChange = (event: any) => {
        console.log("setting text to", event.target.value)
        setInputText(event.target.value)
    }
    return(
        <div>
            <div className={"grid grid-cols-3 gap-4"}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1 className={"text-h1"} style={{fontStyle: "bold"}}>Kitty Translate</h1>
                    <article className="prose-p:underline">
                        <p>asdf</p>
                    </article>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Image alt={"kitty translate"} src={kittyLogo} style={{width: "18em"}}></Image>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "column", minWidth: "30em", alignItems: "center"}}>
                        <Textarea style={{minHeight: "8em", height: "50%", width: "80%"}}
                                  onChange={onTextInputChange}></Textarea>
                        <Button onClick={onTranslateButtonClick}
                                className={"text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"}
                                style={{
                                    width: "10em",
                                    marginTop: "1em",
                                    color: "black",
                                    fontWeight: "bold"
                                }}>TRANSLATE</Button>
                    </div>
                </div>
            </div>
            <div style={{
                margin: "1.25em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h5 style={{marginBottom: "0.5em"}}
                    className={"text-2xl font-bold tracking-tight text-gray-900 dark:text-white"}>Meow-Translation</h5>
                <div style={{width: "80%", justifyContent: "center", alignItems: "center", display: "flex"}}>
                    <h3 style={{
                        padding: "0.85em",
                        width: "80%",
                        minHeight: "7em",
                        border: "solid",
                        borderRadius: "0.75em",
                    }} className={"text-h3"}>{translatedText}</h3>
                    <TextToSpeech data={translatedText}/>
                </div>
                <div>
                    <CatGpt/>
                </div>
            </div>
            <div className={"flex justify-center"}>
                <CatFact/>
            </div>
    </div>
    )
}
