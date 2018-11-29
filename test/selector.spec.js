import {makeGetVisiblePlanets} from '../src/js/reselect/selectors'

describe('selector', () => {
   const mockedState = {
      planets: {
         planets: []
      },
    };
    const mockedProps =  {
      match: {
         params: {name:""}
      },
    }

  let expectedResult = []
  const getVisiblePlanets= makeGetVisiblePlanets();
  it("selector unit test", () => {
    expect(getVisiblePlanets(mockedState,mockedProps)).toEqual(expectedResult)
  })
})