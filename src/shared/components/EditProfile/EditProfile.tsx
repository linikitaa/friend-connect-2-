import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import styles from './editProfile.module.css'
import { Button } from '@/shared/ui/button'

type Props = {
  name: string
  email: string
  login: string
  changeName: (name: string) => void
  changeLogin: (login: string) => void
  changeEmail: (email: string) => void
}

const EditProfile = ({
  login,
  email,
  name,
  changeName,
  changeLogin,
  changeEmail,
}: Props) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button variant="secondary">Edit</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.Overlay} />
      <Dialog.Content className={styles.Content}>
        <Dialog.Title className={styles.Title}>Edit profile</Dialog.Title>
        <Dialog.Description className={styles.Description}>
          Make changes to your profile here. Click save when you are done.
        </Dialog.Description>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.Input}
            id="name"
            defaultValue={name}
            onChange={(e) => changeName(e.target.value)}
          />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.Input}
            id="username"
            defaultValue={login}
            onChange={(e) => changeLogin(e.target.value)}
          />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="Email">
            Username
          </label>
          <input
            className={styles.Input}
            id="email"
            defaultValue={email}
            onChange={(e) => changeEmail(e.target.value)}
          />
        </fieldset>
        <div
          style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}
        >
          <Dialog.Close asChild>
            <Button variant={'outline'} type="submit" value={'Save'}>
              Save
            </Button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default EditProfile
