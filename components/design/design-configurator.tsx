'use client'

import { HandleComponent } from '@/components/handle-component'
import { AspectRatio } from '@/components/ui/aspect-ratio'

import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'

import {
  COLORS,
  MODELS,
} from '@/lib/option-validator'
import { cn } from '@/lib/utils'
import { RadioGroup } from '@headlessui/react'

import { Check, ChevronsUpDown } from 'lucide-react'
import NextImage from 'next/image'
import { useState } from 'react'
import { Rnd } from 'react-rnd'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'


interface DesignConfiguratorProps {
  configId: string
  imageUrl: string
  imageDimensions: { width: number; height: number }
}

export const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  
  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number]
    model: (typeof MODELS.options)[number]
  }>({
    color: COLORS[0],
    model: MODELS.options[0]
  })

  return (
    <div className='relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20'>
      <div
        className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
        <div className='relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]'>
          <AspectRatio
            ratio={896 / 1831}
            className='pointer-events-none relative z-50 aspect-[896/1831] w-full'>
            <NextImage
              fill
              sizes='100'
              alt='phone image'
              src='/phone-template.png'
              className='pointer-events-none z-50 select-none'
            />
          </AspectRatio>
          <div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]' />
          <div
            className={cn(
              'absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]',
              `bg-${options.color.tw}`
            )}
          />
        </div>

        <Rnd
          default={{
            x: 150,
            y: 205,
            height: imageDimensions.height / 4,
            width: imageDimensions.width / 4,
          }}
          className='absolute z-20 border-[3px] border-primary'
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}>
          <div className='relative w-full h-full'>
            <NextImage
            sizes='100'
              src={imageUrl}
              fill
              alt='your image'
              className='pointer-events-none'
            />
          </div>
        </Rnd>
      </div>

      <div className='h-[37.5rem] w-full col-span-full lg:col-span-1 flex flex-col bg-white'>
        <ScrollArea className='relative flex-1 overflow-auto'>
          <div
            aria-hidden='true'
            className='absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none'
          />

          <div className='px-8 pb-12 pt-8'>
            <h2 className='tracking-tight font-bold text-3xl'>
              Personnalisez votre coque
            </h2>

            <div className='w-full h-px bg-zinc-200 my-6' />

            <div className='relative mt-4 h-full flex flex-col justify-between'>
              <div className='flex flex-col gap-6'>
                {/* Colors */}
                <RadioGroup
                  value={options.color}
                  onChange={(val) => {
                    setOptions((prev) => ({
                      ...prev,
                      color: val,
                    }))
                  }}>
                  <Label>Couleur: {options.color.label}</Label>
                  <div className='mt-3 flex items-center space-x-3'>
                    {COLORS.map((color) => (
                      <RadioGroup.Option
                        key={color.label}
                        value={color}
                        className={({ active, checked }) =>
                          cn(
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent',
                            {
                              [`border-${color.tw}`]: active || checked,
                            }
                          )
                        }>
                        <span
                          className={cn(
                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                            `bg-${color.tw}`
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
                {/* Model */}
                <div className='relative flex flex-col gap-3 w-full'>
                  <Label>Modèle</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"outline"} role='combobox' className='w-full justify-between'>
                        {options.model.label}
                        <ChevronsUpDown className='ml-2 size-4 shrink-0 opacity-50'/>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODELS.options.map((model) => <DropdownMenuItem onClick={() => {
                        setOptions((prev) => ({...prev, model}))
                      }} key={model.label} className={cn("flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100", model.label === options.model.label && "bg-zinc-100")}>
                        <Check className={cn("mr-2 size-4", model.label === options.model.label ? "opacity-100" : "opacity-0")}/>
                        {model.label}
                        </DropdownMenuItem>)}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}



