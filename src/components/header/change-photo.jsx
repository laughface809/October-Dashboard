import React, { useEffect } from "react";
import AvatarEditor from 'react-avatar-editor';
import axios from "axios";

export default function ChangePhoto({
    refs,
    targetPhoto,
    language,
    setUserPic,
    setTargetPhoto
}){

        const editor = React.useRef(null);
        const [dataImage, setDataImage] = React.useState('')
        const [loading, setLoading] = React.useState(false)

        const sendingImage = (e) => {
          setLoading(true)
          let formData = new FormData();
          formData.append("images", e);
          axios.post('http://localhost:8081/upload-image', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then((res) => {if(res.statusText === "OK"){
              setUserPic(res.data.name)
              setTimeout(() => {setLoading(false);setTargetPhoto('')}, 1000);
            }}).catch((e) => {})
        }
        
        const getImageUrl = async () => {
            const dataUrl = editor.current.getImage().toDataURL()
            const result = await fetch(dataUrl)
            const blob = await result.blob()
            const imageURL = window.URL.createObjectURL(blob)

            sendingImage(blob)
            setDataImage(imageURL)
        }

        useEffect(() => {
          setDataImage('')
        }, [targetPhoto])

        return (

            <div hidden={!targetPhoto} class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    
                    <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div id="bg-Outside" class="min-h-full flex flex-col justify-center pb-12 sm:px-6 lg:px-8 h-screen items-center">
    
                        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md w-4/5">
                            <div ref={ref => (refs.current['ref'] = ref)} class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 rounded" style={{textAlign: '-webkit-center'}}>
                              <AvatarEditor
                              ref={editor}
                              image={targetPhoto}
                              width={250}
                              height={250}
                              border={50}
                              borderRadius={250}
                              color={[0, 0, 0, 0.6]} // RGBA
                              scale={1.2}
                              rotate={0}
                              backgroundColor="#FFFFFF"
                              />
                              <t onClick={() => getImageUrl()} class={`cursor-${loading? 'not-allowed' : 'pointer'} inline-flex items-center mt-4 px-8 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-[#0088d4] focus:outline-none focus:ring-2 focus:ring-offset-2`}>
                              {loading && 
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>}
                              {language("change_pic_button")}
                              </t>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
          );
}