import {FC} from 'react'
import { useForm } from 'react-hook-form'
import { FaMinus } from 'react-icons/fa'
import { Modal } from '../../components/Modal'
import { Button, ButtonVariant } from '../../components/Button'
import { SubmitInput } from '../../components/SubmitInput'
import { favouritesAPI } from '../../services/FavouritesService'
import { IFav } from '../../models/favourites'

interface props {
  repo: IFav, 
  isActive: boolean, 
  handleIsActive: () => void
}

export const EditModal: FC<props> = ({
  repo, 
  isActive, 
  handleIsActive
}) => {
  const [editRepo] = favouritesAPI.useEditRepoMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = async () => {
    await editRepo({...repo, name: watch().name}).unwrap()
    handleIsActive()
    reset()
  }

  return (
    <Modal 
      isActive={isActive} 
      handleIsActive={handleIsActive}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex'>
          <input 
            {...register('name', { 
              required: 'Name cannot be empty',
              minLength: {
                value: 4,
                message: 'Min length 4 symbols'
              } 
            })} 
            className='p-2'
            placeholder='Edit repo name...'
          />
          <SubmitInput value='Edit' disabled={!isValid}/>
          <Button 
            onClick={() => handleIsActive()}
            variant={ButtonVariant.remove} 
          >
            <FaMinus size='1.5em'/>
          </Button>
        </div>
        <div className='h-8 text-sm text-white text-left px-2'>
          <>{errors.name?.message}</>
        </div>
      </form>
    </Modal>
  )
}
