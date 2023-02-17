import { filesOfProject} from 'tsarch'
import 'tsarch/dist/jest'

describe('Architecture tests', () => {
  it('business logic should not depend on the ui', async () => {
    const rule = filesOfProject()
      .inFolder('business')
      .shouldNot()
      .dependOnFiles()
      .inFolder('ui')

    const violations = await rule.check
    expect(violations).toEqual([])
  })
})
