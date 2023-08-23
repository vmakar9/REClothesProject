import {useFieldArray, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {clothesActions} from "../../redux/slices/ClothesSlice";


export default function ClothesCreate(){
    const {register,handleSubmit,reset,control} = useForm()
    const { fields: sizeFields, append: appendSize, remove: removeSize } = useFieldArray({
        control,
        name: 'size',
    });

    const { fields: seasonFields, append: appendSeason, remove: removeSeason } = useFieldArray({
        control,
        name: 'season',
    });
    const dispatch = useDispatch();

    const save = async (data)=> {
        await dispatch(clothesActions.create({data}))
        reset()
    }


    return(<div>
        <form onSubmit={handleSubmit(save)}>
          <input type={"text"} placeholder={"title"} name={"title"} {...register("title")}/>
            <input type={"text"} placeholder={"description"} name={"description"} {...register("description")}/>
            <input type={"number"} placeholder={"price"} name={"price"} {...register("price")}/>
            <input type={"text"} placeholder={"color"} name={"color"} {...register("color")}/>
            <div>
                <h3>Sizes</h3>
                {sizeFields.map((field, index) => (
                    <div key={field.id}>
                        <input
                            {...register(`size.${index}.name`)}
                            defaultValue={field.name}
                            placeholder="Size"
                        />
                        <button type="button" onClick={() => removeSize(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={() => appendSize({ name: '' })}>
                    Add Size
                </button>
            </div>
            <input type={"text"} placeholder={"materials"} name={"materials"} {...register("materials")}/>
            <input type={"text"} placeholder={"country"} name={"country"} {...register("country")}/>
            <div>
                <h3>Seasons</h3>
                {seasonFields.map((field, index) => (
                    <div key={field.id}>
                        <input
                            {...register(`season.${index}.name`)}
                            defaultValue={field.name}
                            placeholder="Season"
                        />
                        <button type="button" onClick={() => removeSeason(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={() => appendSeason({ name: '' })}>
                    Add Season
                </button>
            </div>
            <input type={"text"} placeholder={"people"} name={"people"} {...register("people")}/>
            <input type={"text"} placeholder={"type"} name={"type"}{...register("type")}/>
            <input multiple  placeholder={"photos"} type={"file"} accept={"image/*"} name={"photos"}{...register("photos")}/>
            <button type="submit">Submit</button>
        </form>

</div>
    )

}