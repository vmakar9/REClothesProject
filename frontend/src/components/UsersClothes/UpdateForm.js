import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useFieldArray, useForm} from "react-hook-form";
import {clothesActions} from "../../redux/slices/ClothesSlice";
import css from "../ClothesCreate/СlothesCreate.module.css";
import {clothesService} from "../../services/clothes.service";

export default function UpdateForm(){
    const dispatch = useDispatch()

    const { clothesId } = useParams()

    const navigate = useNavigate()

    const {register,handleSubmit,control} = useForm()

    const { fields: sizeFields, append: appendSize, remove: removeSize } = useFieldArray({
        control,
        name: 'size',
    });

    const { fields: seasonFields, append: appendSeason, remove: removeSeason } = useFieldArray({
        control,
        name: 'season',
    });

    const handleUpdate = async (data)=>{
        await clothesService.update(clothesId, data);
        navigate('/yourClothes')
    }

    return (<div>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="title" name="title" {...register("title")} />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            placeholder="description"
                            name="description"
                            {...register("description")}
                            rows="4"
                            cols="50"
                            className={css.description}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="number" placeholder="price" name="price" {...register("price")} />
                    </div>
                    <div>
                        <label htmlFor="color">Color</label>
                        <input type="text" placeholder="color" name="color" {...register("color")} />
                    </div>
                    <div>
                        <h3>Sizes</h3>
                        {sizeFields.map((field, index) => (
                            <div key={field.id}>
                                <label htmlFor={`size.${index}.name`}>Size</label>
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
                    <div>
                        <label htmlFor="materials">Materials</label>
                        <input type="text" placeholder="materials" name="materials" {...register("materials")} />
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input type="text" placeholder="country" name="country" {...register("country")} />
                    </div>
                    <div>
                        <h3>Seasons</h3>
                        {seasonFields.map((field, index) => (
                            <div key={field.id}>
                                <label htmlFor={`season.${index}.name`}>Season</label>
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
                    <div>
                        <label htmlFor="people">People</label>
                        <input type="text" placeholder="people" name="people" {...register("people")} />
                    </div>
                    <div>
                        <label htmlFor="type">Type</label>
                        <input type="text" placeholder="type" name="type" {...register("type")} />
                    </div>

                    <button>Update</button>
                </div>
            </form>

        </div>
    )
}